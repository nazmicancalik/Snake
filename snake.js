class Snake {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    this.total = 0;
    this.tail = [];
  }

  update() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);
    this.x += this.vx;
    this.y += this.vy;
  }

  death() {
    for (let i = 0; i < this.tail.length; i++) {
      let d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
      if (d < 2) {
        textSize(40);
        textAlign(CENTER);
        text("You died! Your score is : " + score, width / 2, height / 2);
        this.vx = 0;
        this.vy = 0;
        break;
      }
    }
  }

  eat(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    /*if (d < 200) {
      line(other.x, other.y, other.x - pathLength, other.y);
      line(other.x, other.y, other.x, other.y - pathLength);
      line(other.x, other.y + scl, other.x - pathLength, other.y + scl);
      line(other.x, other.y + scl, other.x, other.y + scl + pathLength);
      line(other.x + scl, other.y, other.x + scl + pathLength, other.y);
      line(other.x + scl, other.y, other.x + scl, other.y - pathLength);
      line(other.x + scl, other.y + scl, other.x + scl + pathLength, other.y + scl);
      line(other.x + scl, other.y + scl, other.x + scl, other.y + scl + pathLength);
    }*/
    if (d < 2) {
      this.total++;
      score += other.score;
      return true;
    } else {
      return false;
    }
  }

  show() {
    fill(0, random(100, 255), 0);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
      fill(0, random(100, 255), 0);
    }
    rect(this.x, this.y, scl, scl);
  }

  setDir(x, y) {
    if ((this.vx * x >= 0) && (this.vy * y >= 0)) {
      this.vx = x * this.speed * scl;
      this.vy = y * this.speed * scl;
    }
  }
}
