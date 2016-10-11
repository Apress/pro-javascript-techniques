#!/usr/bin/env ruby

# Import all the external libraries
require 'cgi'
require 'rubygems'
require_gem 'sqlite3-ruby'
require 'json/objects'

# Display the Javascript header
print "Content-type: text/javascript\n\n"

# Initalize the application variables
err = ""
r = []
cgi = CGI.new

# Capture parameters passed in by the user
call = cgi['callback']
sql = cgi['sql']

# Get a database from the user and make
# sure that no malicious characters were used
d = cgi['db'].gsub(/[^a-zA-Z0-9_-]/, "")

# If no database was provided, then use 'test'
if d == '' then
  d = "test"
end

# If a SQL query was provided
if sql != '' then
  # Make sure that we capture all thrown DB errors
  begin
    # Connect to the SQLite database, which is just a file
    db = SQLite3::Database.new('../../data/' + d + '.db')

    # If the sql has some returned rows
    # (e.g. it was a SELECT)
    db.query( sql ) do |rows|
      # Go through every returned row
      rows.each do |row|
        # Create a temporary hash
        tmp = {}

        # Force the array columns into
        # Hash Key/Value pairs
        for i in 0 .. rows.columns.length-1
          tmp[rows.columns[i]] = row[i]
        end

        # Add the row hash to the array of found rows
        r.push tmp
      end
    end
  rescue Exception => e
    # If an error occurred, remember the message for later
    err = e
  end
else
  # If no SQL query was provided, display an error
  err = "No query provided."
end

# If an error occurred, return a hash containing
# an error key and a value containing the error message
if err != '' then
  r = { "error" => err }
end

# Convert the return object to a JSON string
jout = r.to_json

# If a callback was provided
if call != '' then
  # Wrap the returned object in the callback string
  print call + "(" + jout + ")"
else
  # Otherwise just print the JSON string
  print jout
end
