@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :author_id, :body, :post_id, :reply_ids, :parent_comment_id
  end
end
