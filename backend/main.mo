import List "mo:core/List";
import Blob "mo:core/Blob";
import Order "mo:core/Order";
import Array "mo:core/Array";
import MixinStorage "blob-storage/Mixin";



actor {
  include MixinStorage();

  type Img = {
    bytes : Blob;
    png : Bool;
  };

  let imgs = List.empty<Img>();

  public shared ({ caller }) func addImg(bytes : Blob) : async () {
    let img : Img = {
      bytes;
      png = true;
    };
    imgs.add(img);
  };

  module Img {
    public func compareByPng(a : Img, b : Img) : Order.Order {
      if (a.png and not b.png) {
        #less;
      } else if (not a.png and b.png) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  public query ({ caller }) func getJpgs() : async [Img] {
    imgs.toArray().sort(Img.compareByPng);
  };
};

