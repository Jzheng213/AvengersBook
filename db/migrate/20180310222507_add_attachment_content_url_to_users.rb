class AddAttachmentContentUrlToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :content_url
    end
  end

  def self.down
    remove_attachment :users, :content_url
  end
end
