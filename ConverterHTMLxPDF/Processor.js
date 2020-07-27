class Processor{

    static Process(data){
        var sep = data.split("\n");
        var rows = [];

        sep.forEach(row => {
           var aray = row.split(",");
           rows.push(aray);
        });
        return rows;
    }

}
 

module.exports  = Processor;