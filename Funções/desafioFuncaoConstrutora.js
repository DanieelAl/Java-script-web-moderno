function pessoa(name) {
    this.name=name
    this.falar = function() {
        console.log(`Meu nome é ${name}`)
    }
}

const p1 = new pessoa('Arthur')
p1.falar()