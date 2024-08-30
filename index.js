// console.log("Hello World!")

document.addEventListener("DOMContentLoaded", (_e) => {
  // ページが開かれたときにすぐ動く
  ['.js-countdownScreen', '.js-finishScreen'].forEach((elementTarget) => {
    let element = document.querySelector(elementTarget)
    // カウントダウン画面と終了画面を隠す
    element.classList.add("hidden-screen")
  })
  // 「開始」ボタンが押されたら、 js-coutdownScreen のみを表示する
  const startButton = document.querySelector(".js-startButton")

  startButton.addEventListener("click", (_e) => {
    // クリックされたら... (何かする)

    // js-countdownScreen のみを表示する
    // → js-startScreen, js-finishScreen を非表示にする (等価)

    ['.js-startScreen', '.js-finishScreen'].forEach((elementTarget) => {
      let element = document.querySelector(elementTarget)
      // element に対して クラスを付与する (非表示用クラス)
      element.classList.add("hidden-screen")
    })
  })

  // TODO: クリックされたら、 js-startScreen のみを表示する
})