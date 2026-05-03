import Types "../types/admissions";
import List "mo:core/List";

module {
  public func submit(
    submissions : List.List<Types.Submission>,
    nextId : Nat,
    name : Text,
    age : Nat,
    contactNumber : Text,
    email : Text,
    courseSelection : Text,
  ) : Types.Submission {
    {
      id = nextId;
      name;
      age;
      contactNumber;
      email;
      courseSelection;
    };
  };

  public func all(submissions : List.List<Types.Submission>) : [Types.Submission] {
    submissions.toArray();
  };
};
