
exports.seed = function(knex) {
  return knex('toodo').del()
    .then(function () {
      return knex('toodo').insert([
        {
          title: 'Nota-1',
          content: "conteudo da nota -1"
        },
        {
          title: 'Nota-2',
          content: "conteudo da nota -2"
        },
      ]);
    });
};
