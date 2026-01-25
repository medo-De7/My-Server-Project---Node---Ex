from turtle import *
from freegames import floor, vector

# إعدادات اللعبة الأولية
state = {'score': 0}
path = Turtle(visible=False)
writer = Turtle(visible=False)
aim = vector(5, 0)
pacman = vector(-40, -80)
# أماكن الأشباح وسرعتهم
ghosts = [
    [vector(-180, 160), vector(5, 0)],
    [vector(-180, -160), vector(0, 5)],
    [vector(100, 160), vector(0, -5)],
    [vector(100, -160), vector(-5, 0)],
]
# خريطة اللعبة (0 يعني جدار، 1 يعني طريق فيه نقط)
tiles = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    # ... (تكملة الخريطة تكون مصفوفة طويلة من الأرقام)
]

def square(x, y):
    "رسم مربع في إحداثيات معينة"
    path.up()
    path.goto(x, y)
    path.down()
    path.begin_fill()
    for count in range(4):
        path.forward(20)
        path.left(90)
    path.end_fill()

def move():
    "تحريك باكمان والأشباح"
    writer.undo()
    writer.write(state['score'])

    clear()

    # تحريك باكمان
    if valid(pacman + aim):
        pacman.move(aim)

    index = offset(pacman)

    # أكل النقطة
    if tiles[index] == 1:
        tiles[index] = 2
        state['score'] += 1
        x, y = rect(index)
        square(x, y)

    up()
    goto(pacman.x + 10, pacman.y + 10)
    dot(20, 'yellow') # رسم باكمان

    # تحريك الأشباح
    for point, course in ghosts:
        if valid(point + course):
            point.move(course)
        else:
            options = [
                vector(5, 0),
                vector(-5, 0),
                vector(0, 5),
                vector(0, -5),
            ]
            import random
            course.x = random.choice(options).x
            course.y = random.choice(options).y

        up()
        goto(point.x + 10, point.y + 10)
        dot(20, 'red') # رسم الشبح

    update()
    ontimer(move, 100) # تكرار الحركة كل 100 مللي ثانية

# تشغيل اللعبة
setup(420, 420, 370, 0)
hideturtle()
tracer(False)
listen()
onkey(lambda: aim.rotate(90), 'Right')
onkey(lambda: aim.rotate(-90), 'Left')
onkey(lambda: aim.rotate(180), 'Up')
onkey(lambda: aim.rotate(0), 'Down')
move()
done()