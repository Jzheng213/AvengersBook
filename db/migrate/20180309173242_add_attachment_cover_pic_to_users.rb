class AddAttachmentCoverPicToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :cover_pic
    end
  end

  def self.down
    remove_attachment :users, :cover_pic
  end
end
