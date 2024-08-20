
async function main() {

    const contentBox = document.getElementById('content_box')

    // await import('./showdown.js') <== This causes an error
    await import('./showdown_with_fix.js')
    const converter = new showdown.Converter()
    const text      = '# hello, markdown!\n\n  * First\n  * Second'
    const html      = converter.makeHtml(text)
    contentBox.innerHTML = html
}


function checkReadyState() {
    if (document.readyState === 'complete') {
        main()
    }
}
document.onreadystatechange = checkReadyState
checkReadyState()
