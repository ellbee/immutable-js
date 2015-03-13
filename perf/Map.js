describe('Map', function () {

  var obj2 = {};
  for (var ii = 0; ii < 2; ii++) {
    obj2['x' + ii] = ii;
  }

  it('builds from an object of 2', function() {
    Immutable.Map(obj2);
  });

  var obj8 = {};
  for (var ii = 0; ii < 8; ii++) {
    obj8['x' + ii] = ii;
  }

  it('builds from an object of 8', function() {
    Immutable.Map(obj8);
  });

  var obj32 = {};
  for (var ii = 0; ii < 32; ii++) {
    obj32['x' + ii] = ii;
  }

  it('builds from an object of 32', function() {
    Immutable.Map(obj32);
  });

  var obj1024 = {};
  for (var ii = 0; ii < 1024; ii++) {
    obj1024['x' + ii] = ii;
  }

  it('builds from an object of 1024', function() {
    Immutable.Map(obj1024);
  });

  var list2 = Immutable.List().asMutable();
  for (var ii = 0; ii < 2; ii++) {
    list2 = list2.push(
      Immutable.List(['x' + ii, ii])
    );
  }
  list2 = list2.asImmutable();

  it('builds from a List of 2', function() {
    Immutable.Map(list2);
  });

  var list8 = Immutable.List().asMutable();
  for (var ii = 0; ii < 8; ii++) {
    list8 = list8.push(
      Immutable.List(['x' + ii, ii])
    );
  }
  list8 = list8.asImmutable();

  it('builds from a List of 8', function() {
    Immutable.Map(list8);
  });

  var list32 = Immutable.List().asMutable();
  for (var ii = 0; ii < 32; ii++) {
    list32 = list32.push(
      Immutable.List(['x' + ii, ii])
    );
  }
  list32 = list32.asImmutable();

  it('builds from a list of 32', function() {
    Immutable.map(list32);
  });

  var list1024 = Immutable.List().asMutable();
  for (var ii = 0; ii < 1024; ii++) {
    list1024 = list1024.push(
      Immutable.List(['x' + ii, ii])
    );
  }
  list1024 = list1024.asImmutable();

  it('builds from a List of 1024', function() {
    Immutable.Map(list1024);
  });
});
