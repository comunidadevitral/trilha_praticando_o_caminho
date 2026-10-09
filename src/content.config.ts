import { defineCollection, z } from 'astro:content';

const stepsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    etapa: z.number().min(1).max(2),
    status: z.enum(['aberto', 'breve']),
    semana: z.number().min(1).max(17),
    medite: z.object({
      base_biblica: z.string(),
      devocional: z.string(),
    }),
    assista: z.object({
      titulo: z.string(),
      url: z.string().url().optional(),
    }).optional(),
    aprofunde: z.object({
      livro: z.object({
        titulo: z.string(),
        autor: z.string().optional(),
        url: z.string().url().optional(),
      }).optional(),
      musica: z.object({
        titulo: z.string(),
        artista: z.string().optional(),
        url: z.string().url().optional(),
      }).optional(),
    }).optional(),
    pratique: z.object({
      desafio: z.string().optional(),
      experimento: z.string(),
      pergunta: z.string(),
      instrucoes: z.string(),
    }).optional(),
    organizese: z.object({
      dias: z.array(
        z.object({
          dia: z.string(),
          tema: z.string().optional(),
          leitura: z.string().optional(),
        })
      ).optional(),
      desafio_semana: z.string().optional(),
    }).optional(),
    para_comecar: z.object({
      resumo: z.string(),
      apostila_pdf: z.string().url().optional(),
    }).optional(),
    ouca: z.object({
      titulo: z.string(),
      spotify_url: z.string().url().optional(),
    }).optional(),
  }),
});

export const collections = {
  steps: stepsCollection,
};
