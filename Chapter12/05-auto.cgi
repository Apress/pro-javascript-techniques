#!/usr/bin/perl

use CGI;

# Get the 'q' parameter out of the incoming Query String
my $cgi = new CGI();
my $q = $cgi->param('q');

# Our limited "database" contains five users
# with their username and full name.
my @data = (
    {
        user => "bradley",
        name => "Bradley S"
    },
    {
        user => "jason",
        name => "Jason S"
    },
    {
        user => "john",
        name => "John R"
    },
    {
        user => "josh",
        name => "Josh K"
    },
    {
        user => "julia",
        name => "Julia W"
    }
);

# Make sure that we print out the correct HTML header
print "Content-type: text/html\n\n";

# Now we "search" through the data
foreach my $row (@data) {
    
    # Looking for users that match our auto-complete search
    if ( $row->{user} =~ /$q/i || $row->{name} =~ /$q/i ) {
      
        # If the user matches, print out the necessary HTML
        print qq~<li id="$row->{user}">
            <img src="icons/$row->{user}_icon.jpg"/>
            <div>
                <strong>$row->{user}</strong> ($row->{name})
            </div>
        </li>~;
        
    }
    
}

