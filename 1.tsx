class Food {
  ele: HTMLDivElement;

  constructor() {
    this.ele = document.getElementById("food")!;
  }


  public get X(): string {
    return this.ele.offsetLeft;
  }


  public get Y(): string {
    return this.ele.offsetTop
  }

  change() {
    // 最小0 最大290
    // 并且是10的倍数，蛇要吃得到才行
    let top = Math.round(Math.random() * 29) * 10;
    // let size2 = Math.floor(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;


    this.ele.style.left = top + 'px';
    this.ele.style.top = left + 'px';
  }


}


class ScorePanel {
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  constructor() {
    this.scoreEle = document.getElementById("score");
    this.levelEle = document.getElementById("score");

  }
  addScore() {
    this.score++;
    this.scoreEle.innerHTML = this.score + '';
  }
  levelUp() {
    this.levelEle.innerHTML = ++this.level + ''
  }
}