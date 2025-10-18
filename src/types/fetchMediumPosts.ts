export async function fetchMediumPosts() {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@WaterSec"
    );
    const data = await res.json();
    return data.items.map((item: any) => ({
      title: item.title,
      description: item.description,
      image: item.thumbnail,
      link: item.link,
      author: item.author,
      pubDate: item.pubDate,
    }));
  }
  