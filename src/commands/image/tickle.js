/**
 * Created by Julian/Wolke on 25.01.2017.
 */
let RRACommand = require('../../structures/rraCommand');
class Tickle extends RRACommand {
    constructor({t}) {
        super();
        this.cmd = 'tickle';
        this.cat = 'image';
        this.needGuild = false;
        this.t = t;
        this.accessLevel = 0;
    }
}
module.exports = Tickle;
