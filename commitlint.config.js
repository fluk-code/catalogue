module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // Alterações que afetam o sistema de build ou dependências
        'chore', // Tarefas de manutenção, não relacionadas ao código do usuário
        'ci', // Alterações em arquivos/configurações de CI
        'docs', // Documentação
        'feat', // Novas funcionalidades
        'fix', // Correção de bugs
        'perf', // Melhorias de performance
        'refactor', // Refatoração que não corrige bug nem adiciona feature
        'revert', // Reverte um commit anterior
        'style', // Formatação, falta de ponto e vírgula, etc (não altera código)
        'test', // Adicionando testes faltantes
      ],
    ],
  },
};
