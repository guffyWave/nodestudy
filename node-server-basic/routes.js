function requestHandler(req, res) {
    console.log(' req url --', req.url);
    console.log(' req method --', req.method);
    console.log(' req headers --', req.headers);

    res.write('<html>');
    res.write('<h1>');
    res.write('Bismillah Hirrhama Nirrahim Apple');
    res.write('</h1>');
    res.write('</html>');

    res.end();
}

module.exports = requestHandler;
