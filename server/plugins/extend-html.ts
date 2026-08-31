export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (_html, { event: _event }) => {
    // This will be an object representation of the html template.
    // console.log(html);
    // html.head.push(
    //   `<meta name="description" content="My custom description" />`,
    // );
  });
  // You can also intercept the response here.
  nitroApp.hooks.hook("render:response", (_response, { event: _event }) => {
    // console.log(response);
  });
});
