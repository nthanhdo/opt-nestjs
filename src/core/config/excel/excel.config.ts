export default () => ({
  templatePath: process.env.EXCEL_TEMPLATE_PATH || './templates',
  maxRows: parseInt(process.env.EXCEL_MAX_ROWS ?? '1000', 10),
});
