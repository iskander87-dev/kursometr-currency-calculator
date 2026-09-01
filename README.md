# Курсометр

Веб-калькулятор для конвертации популярных валют. Рабочая версия доступна по адресу: https://kursometr-currency-calculator.ponomarev-ao.chatgpt.site

## Что умеет

- конвертирует 8 популярных валют;
- получает актуальные курсы из ExchangeRate-API и перепроверяет их каждый час;
- показывает дату курса, популярные пары и мини-графики;
- поддерживает светлую и тёмную тему.

## Локальный запуск

Нужен Node.js 22.13 или новее.

```bash
git clone https://github.com/iskander87-dev/kursometr-currency-calculator.git
cd kursometr-currency-calculator
npm install
npm run dev
```

После запуска откройте в браузере адрес, который выведет команда (обычно `http://localhost:3000`).

## Сборка

```bash
npm run build
```

## Источник курсов

Курсы запрашиваются из [ExchangeRate-API](https://www.exchangerate-api.com/). Дата последнего обновления источника отображается на сайте.
