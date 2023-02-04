const CliFrames = require("cli-frames");
const fs = require('fs');

const path = './scripts/ascii-art'

const frames = [
    fs.readFileSync(`${path}/0`, 'utf8'),
    fs.readFileSync(`${path}/1`, 'utf8'),
    fs.readFileSync(`${path}/2`, 'utf8'),
    fs.readFileSync(`${path}/3`, 'utf8'),
];

var animation = new CliFrames();

animation.load(frames);

animation.start({ repeat: false, delay: 300, end: () => {
    animation.start({ repeat: false, delay: 300 });
}});