export interface GifObject {
  onload: any;
  onclick: any;
  onsent: any;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: {
    original: any;
    downsized: any;
    downsized_large: any;
    downsized_medium: any;
    downsized_small: any;
  };
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
  username: string;
}
