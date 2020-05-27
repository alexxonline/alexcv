import { Link } from './link';

export class Helpers {
  static applyLink(text: string, link: Link): string {
    return text.replace(
      link.text,
      `<a href='${link.link}' target='_blank'>${link.text}</a>`,
    );
  }

  static applyLinks(text: string, links: Link[]): string {
    if (links == null) return text;
    let result = text;
    links.forEach((lin) => {
      result = this.applyLink(result, lin);
    });
    return result;
  }
}
