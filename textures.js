const MAIN = {
    ms: '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999'
}

const script = false

const examination = () => {
    function action() {
        document.loader(MAIN.ms, 'Script off')
        document.pkgNotif('Script off')
    }

    action()
}

!script ? examination() : console.warn('Script load')
