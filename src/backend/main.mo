import List "mo:core/List";
import Types "types/admissions";
import AdmissionsApi "mixins/admissions-api";

actor {
  let submissions = List.empty<Types.Submission>();
  include AdmissionsApi(submissions);
};

