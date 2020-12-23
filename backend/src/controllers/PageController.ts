import { Request, Response } from 'express';

const listPages = [
  {"title": "Home", "icon": "fa-home", "url": "home", "content": [] },
  {"title": "Camera","icon": "fa-building","url": "camera","content":
    [
      { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
      { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
      { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
      { "type": "post", "title": "Taxas e Tarifários", "properties": {"categories": ["taxes"]} }
    ]
  },
  {"title": "Comunicar", "icon": "fa-chat", "url": "comunicar", "content": []},
  {"title": "Proteção civil", "icon": "fa-danger", "url": "protecao-civil", "content": [] },
  {"title": "Covid", "icon": "fa-band-aid", "url": "covid", "content": [] },
  {"title": "Agenda", "icon": "fa-calendar", "url": "agenda", "content": [] }
];

export default {
  async index(request: Request, response: Response) {
    return response.json(listPages);
  },

  async show(request: Request, response: Response) {
    const { page } = request.params;

    const findPage = listPages.find((pg) => pg.url === page);

    return response.json(findPage);
  },
}
