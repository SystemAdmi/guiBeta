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

const users = []

if (localStorage.getItem('gl')) {
    HACK.nameScript.push(users)
}

console.log(users)
