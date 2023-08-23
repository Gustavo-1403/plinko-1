class Particles {
    constructor(x, y) {

        var options_part = {
            restitution: 1,
            friction: 2,
            isStatic: false
        }

        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(this.x, this.y, this.r, options_part);
        this.color = color(random(0, 255), random(0, 255));

        World.add(world, this.body);

    }


    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill(this.color);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();


    }
}