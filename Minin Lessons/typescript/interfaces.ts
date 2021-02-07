interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1236',
  size: {
    width: 25,
    height: 42
  },
  color: '#ccc'
}

const rect3 = {} as Rect
const rect4 = <Rect>{}

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '12',
  size: {
    width: 12,
    height: 4
  },
  getArea(): number {
    return this.size.width * this.size.heigth
  }
}

// ============================
interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date
  setTime(date: Date): void {
    this.time = date
  }
}

// ==========================
interface Style {
  [key: string]: string
}

const css: Style = {
  border: '1px solid red',
  marginTop: '2px',
  listStyle: 'none'
}