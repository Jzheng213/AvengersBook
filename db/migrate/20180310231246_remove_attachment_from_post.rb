class RemoveAttachmentFromPost < ActiveRecord::Migration[5.1]
  def self.up
    remove_attachment :users, :content_url
  end

  def self.down
    remove_attachment :users, :content_url
  end
end
