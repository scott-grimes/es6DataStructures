describe('bloomFilter', function() {
  var bloomFilter;
  

  beforeEach(function() {
    bloomFilter = new BloomFilter(18);
  });

  it('should have methods named "insert" and "test"', function() {
    expect(bloomFilter.insert).to.be.a('function');
    expect(bloomFilter.test).to.be.a('function');
  });

  it('should return maybe for values that were inserted', function() {
    bloomFilter.insert('a');
    expect(bloomFilter.test('a')).to.equal('maybe');
  });

  it('should return false for values that were not inserted', function() {
    bloomFilter.insert('a');
    expect(bloomFilter.test('b')).not.to.equal('maybe');
  });

  it('should return maybe for values which have a hash collision', function() {
    bloomFilter.insert('a');
    expect(bloomFilter.test('22')).to.equal('maybe');
  });

  it('rate of false positives should be within 5% of (1-e^(-kn/m))^k', function() {
    bloomFilter.insert('a');
    bloomFilter.insert('b');
    
    var expected = (1-Math.exp(-3*2/18))**3;
    
    var falsePositiveCount = 0;
    var runs = 10000;
    
    for(var i = 0;i<runs;i++){
      
      // picks a random character from A-Z or a-z
      var char = String.fromCharCode( Math.floor( Math.random() * 52 + 65) );
     
      if( bloomFilter.test(char) ==='maybe' && !(char === 'a' || char === 'b') ){
        falsePositiveCount++;
      }
      
  }
    var falsePositiveRatio = falsePositiveCount/runs;
    
    
    expected+=.05;
    
    expect( falsePositiveRatio ).to.be.below(expected);
  });

});
