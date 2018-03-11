class AddAttachmentContentToPosts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :posts do |t|
      t.attachment :content
    end
  end

  def self.down
    remove_attachment :posts, :content
  end
end
