// Load the Test More module (to test itself!)
new JSAN('../lib').use('Test.More');

// Plan for six tests to occur (to know when something goes wrong)
plan({tests: 6});

// Test three simple cases
ok( 2 == 2,             'two is two is two is two' );
is( "foo", "foo",       'foo is foo' );
isnt( "foo", "bar",     'foo isnt bar');

// Test using regular expressions
like("fooble", /^foo/,   'foo is like fooble');
like("FooBle", /foo/i,   'foo is like FooBle');
like("/usr/local/", '^\/usr\/local', 'regexes with slashes in like' );

