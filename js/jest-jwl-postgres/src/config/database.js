module.exports = {
  host: '127.0.0.1',
  username: 'root',
  password: 'example',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false, // Diminuir log
  define: {
    timestamps: true, // created_at, updated_at
    underscored: true, // Coloca o nome das tabelas para snake_case
    underscoredAll: true, // Afeta também os campos, não só o nome da tabela
  }
};