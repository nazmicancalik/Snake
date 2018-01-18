class Orange {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.score = 50;
  }

  plantFood() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    if (random(100) > 75) {
      this.score = 100;
    } else {
      this.score = 50;
    }
    this.x = floor(random(cols));
    this.y = floor(random(rows));
    this.x = this.x * scl;
    this.y = this.y * scl;
  }

  show() {
    fill(250, 100, 100);
    if (this.score === 100) {
      fill(255, 0, 0);
    }
    rect(this.x, this.y, scl, scl);
  }
}
