import React from 'react';
import Sketch from 'react-p5';

let x;
let y;
let xspeed;
let yspeed;
let width = 300;
let heigth = 300;
let icon;
// let iconW = icon.width;
// let iconH = icon.heigth;

function Tech () {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, heigth).parent(canvasParentRef);
        width = 300;
        heigth = 300;
        x = 200;
        y = 200;
        xspeed = 2.5;
        yspeed = 2.5;
    }

    function preload (p5) {
        icon = p5.loadImage('./icons/react.png');
    }

    const draw = (p5) => {
        p5.background(0);
        p5.rect(x, y, 50, 30);
        // p5.image(icon, x, y);

        x = x + xspeed;
        y = y + yspeed;

        // create a loop fot the if statement!

        if (x + 50 == width || x == 0) {
            xspeed = -xspeed;
        } 
        if (y + 30 == heigth || y == 0) {
            yspeed = -yspeed;
        } 
    }

    return <Sketch setup={setup} draw={draw} />;
}

export default Tech;