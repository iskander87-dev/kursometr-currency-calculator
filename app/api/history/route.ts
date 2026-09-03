type CbrPoint = { date: string; value: number };

const currencies = {
  USD: 'R01235',
  EUR: 'R01239',
  CNY: 'R01375',
  KZT: 'R01335',
} as const;

const formatCbrDate = (date: Date) => date.toLocaleDateString('ru-RU');

function parseHistory(xml: string, nominal: number): CbrPoint[] {
  return [...xml.matchAll(/<Record Date="([^"]+)"[^>]*>[\s\S]*?<Value>([^<]+)<\/Value>/g)].map(([, date, rawValue]) => ({
    date: date.slice(0, 5),
    value: Number(rawValue.replace(',', '.')) / nominal,
  }));
}

export async function GET() {
  const end = new Date();
  const start = new Date(end);
  start.setMonth(start.getMonth() - 3);
  const range = `date_req1=${encodeURIComponent(formatCbrDate(start))}&date_req2=${encodeURIComponent(formatCbrDate(end))}`;

  const entries = await Promise.all(Object.entries(currencies).map(async ([code, id]) => {
    const response = await fetch(`https://www.cbr.ru/scripts/XML_dynamic.asp?${range}&VAL_NM_RQ=${id}`);
    if (!response.ok) throw new Error(`CBR history unavailable for ${code}`);
    const xml = await response.text();
    return [code, parseHistory(xml, code === 'KZT' ? 100 : 1)] as const;
  }));

  return Response.json(Object.fromEntries(entries));
}
