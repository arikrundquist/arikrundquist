
let counter = 0;

const Lister = (Module, objs) => {

    return <>{objs.map((obj) => {

        obj.key = counter++;
        let m = Module(obj);
        console.assert(m.key);
        return m;
    })}</>;
};

export default Lister;
