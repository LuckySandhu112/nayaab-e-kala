module {
  public type Submission = {
    id : Nat;
    name : Text;
    age : Nat;
    contactNumber : Text;
    email : Text;
    courseSelection : Text;
  };

  public type SubmitResult = {
    #ok : Nat;
    #err : Text;
  };
};
