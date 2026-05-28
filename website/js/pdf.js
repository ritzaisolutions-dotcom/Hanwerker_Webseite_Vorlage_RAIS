(() => {
  'use strict';

  const pdfBtn = document.getElementById('calcPdfBtn');
  if (!pdfBtn) return;

  const escapePdfText = (text) =>
    String(text).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

  const buildSimplePdf = (lines) => {
    const header = '%PDF-1.4\n';
    const contentStream = [
      'BT',
      '/F1 12 Tf',
      '50 780 Td'
    ];

    lines.forEach((line, index) => {
      if (index === 0) {
        contentStream.push(`(${escapePdfText(line)}) Tj`);
      } else {
        contentStream.push('0 -18 Td');
        contentStream.push(`(${escapePdfText(line)}) Tj`);
      }
    });
    contentStream.push('ET');
    const streamData = contentStream.join('\n');

    const objects = [];
    objects.push('1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n');
    objects.push('2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n');
    objects.push('3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n');
    objects.push('4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n');
    objects.push(`5 0 obj << /Length ${streamData.length} >> stream\n${streamData}\nendstream endobj\n`);

    let offset = header.length;
    const xref = ['xref', `0 ${objects.length + 1}`, '0000000000 65535 f '];
    const body = [];

    objects.forEach((obj) => {
      xref.push(`${String(offset).padStart(10, '0')} 00000 n `);
      body.push(obj);
      offset += obj.length;
    });

    const xrefStart = offset;
    const trailer = [
      ...xref,
      'trailer',
      `<< /Size ${objects.length + 1} /Root 1 0 R >>`,
      'startxref',
      String(xrefStart),
      '%%EOF'
    ].join('\n');

    return new Blob([header, ...body, trailer], { type: 'application/pdf' });
  };

  pdfBtn.addEventListener('click', () => {
    const calc = window.lastCalculation;
    if (!calc) return;

    const clientName = (typeof CLIENT !== 'undefined' && CLIENT.name && !CLIENT.name.startsWith('['))
      ? CLIENT.name
      : 'Handwerker';
    const pdfSlug = (typeof CLIENT !== 'undefined' && CLIENT.pdfSlug && !CLIENT.pdfSlug.startsWith('['))
      ? CLIENT.pdfSlug
      : 'kalkulation';

    const lines = [
      `${clientName} - Kalkulation`,
      `Datum: ${new Date(calc.generatedAt).toLocaleString('de-DE')}`,
      calc.summary || '',
      `Projektflaeche: ${calc.area} m2`,
      '---',
      ...calc.lineItems.map((item) => item.replace(/<[^>]+>/g, '')),
      '---',
      `Gesamt min: ${Math.round(calc.sumMin)} EUR`,
      `Gesamt avg: ${Math.round(calc.sumAvg)} EUR`,
      `Gesamt max: ${Math.round(calc.sumMax)} EUR`,
      '',
      'Wichtiger Hinweis:',
      'Unverbindlicher Richtwert nach branchenueblichen Mittelwerten fuer Deutschland.',
      'Endpreis nur nach Vor-Ort-Aufmass und finaler Materialwahl moeglich.',
      'Handwerkerleistungen sind steuerlich absetzbar (Paragraph 35a EStG).'
    ];

    const blob = buildSimplePdf(lines);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pdfSlug}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });
})();
