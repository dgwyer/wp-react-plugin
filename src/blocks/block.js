const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

console.log("the editorfr");

registerBlockType("my-unique-namespace/ultimate-block", {
  title: __("The Best Block Ever", "domain"),
  icon: "wordpress",
  category: "common",
  keywords: [
    __("sample", "domain"),
    __("Gutenberg", "domain"),
    __("block", "domain")
  ],
  edit: () => <h2>Welcome to the Gutenberg Editor!</h2>,
  save: () => <h2>How am I looking on the front end?</h2>
});
