@mylists.each do |listitem|
    json.set! listitem.id do
        json.partial! 'api/mylists/mylist', mylist: listitem
    end
end