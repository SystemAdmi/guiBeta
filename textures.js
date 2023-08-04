const MAIN = {
    ms: 5000000000000000
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
