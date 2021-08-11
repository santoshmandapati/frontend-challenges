
function introspect() {
    event.stopPropagation();
    console.log('introspection');
    console.log(`event.target: ${event.target}`);
    console.log(`event.currentTarget: ${event.currentTarget}`);
    console.log(`this: ${this}`);
}