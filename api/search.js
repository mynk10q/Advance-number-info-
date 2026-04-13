export default async function handler(req, res) {

  const { key, term } = req.query;

  if (key !== "mynkx") {
    return res.json({
      status: false,
      message: "Invalid key"
    });
  }

  if (!term) {
    return res.json({
      status: false,
      message: "No term"
    });
  }

  try {

    const response = await fetch("https://leakosintapi.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: "6621836125:mOIZTac9",
        request: term,
        limit: 100,
        lang: "en"
      })
    });

    const data = await response.json();

    res.json(data);

  } catch (e) {

    res.json({
      status: false,
      message: "API Down"
    });

  }

}
