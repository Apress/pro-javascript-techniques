# If the sql has some returned rows  (e.g. it was a SELECT)
db.query( sql ) do |rows|
    # Go through every returned row
    rows.each do |row|
        # Create a temporary hash
        tmp = {}

        # Force the array columns into Hash Key/Value pairs
        for i in 0 .. rows.columns.length-1
            tmp[rows.columns[i]] = row[i]
        end

        # Add the row hash to the array of found rows
        r.push tmp
    end
end
