def on_forever():
    soundExpression.sad.play()
    basic.show_icon(IconNames.NO)
    basic.clear_screen()
    soundExpression.happy.play()
    basic.show_icon(IconNames.YES)
    basic.clear_screen()
basic.forever(on_forever)
