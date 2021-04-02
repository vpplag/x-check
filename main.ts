input.onButtonPressed(Button.A, function () {
    soundExpression.sad.play()
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.happy.play()
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.hello.play()
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
})
